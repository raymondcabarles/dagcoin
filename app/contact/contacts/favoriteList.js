import React, {Component} from 'react';

import {
    StyleSheet, View
} from 'react-native';

import BasePageLayout from "../../general/basePageLayout";
import DagGroupList from "../../controls/dagGroupList";
import DagTextInput from "../../controls/dagTextInput";
import ContactListItem from "./components/contactListItem";
import ContactListGroup from "./components/contactListGroup";

import {container} from "../../styles/main";
import NoFavorites from "./components/noFavorites";
import {connect} from "react-redux";

class FavoriteList extends Component {
    constructor() {
        super();

        this.state = {
            search: ""
        };
    }

    onSearchChange(value) {
        this.setState({
            search: value
        });
    }

    renderContent() {
        if (this.props.contacts.length) {
            return this.renderFavorites();
        } else {
            return this.renderNoFavorites();
        }
    }

    renderFavorites() {
        const contacts = this.props.contacts.filter(c => (c.firstName + " " + c.lastName).toLowerCase().indexOf(this.state.search.toLowerCase()) >=0);

        return (<View>
            <DagTextInput onValueChange={this.onSearchChange.bind(this)}
                          placeholder={'Search'}
                          value={this.props.search} />

            <DagGroupList items={contacts}
                          groupContainerStyle={StyleSheet.flatten([container.p20t, container.p20b])}
                          getGroupKey={(item) => (item.firstName || "")[0].toUpperCase()}
                          renderGroup={(group, index) => (<ContactListGroup key={index}
                                                                            title={group.key} />)}
                          renderItem={(item, index, total) => (<ContactListItem key={index}
                                                                                contact={item}
                                                                                last={index===(total - 1)}
                                                                                onSetFavoriteClick={this.props.onSetFavoriteClick}
                                                                                onContactClick={this.props.onContactClick}
                                                                                onRemoveFavoriteClick={this.props.onRemoveFavoriteClick} />)}
            />
        </View>);
    }

    renderNoFavorites() {
        return (<NoFavorites/>);
    }

    render() {
        return (
            <BasePageLayout style={StyleSheet.flatten([styles.container, container.p20])}>
                {this.renderContent()}
            </BasePageLayout>
        );
    }
}

FavoriteList.defaultProps = {
    onContactClick: (contact) => {},
    onSetFavoriteClick: (contact) => {},
    onRemoveFavoriteClick: (contact) => {},
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function mapStateToProps(state) {
    return {
        contacts: state.contacts.filter(c => c.isFavorite)
    }
}

export default FavoriteListWrapper = connect(mapStateToProps)(FavoriteList);

