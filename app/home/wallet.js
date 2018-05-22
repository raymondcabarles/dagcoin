import React, {Component} from 'react';

import {
    StyleSheet, Text, View
} from 'react-native';

import {connect} from "react-redux";
import BasePageLayout from "../general/basePageLayout";
import HomeLayout, {MENU_ITEMS} from "./homeLayout";
import PageHeader from "../general/pageHeader";
import BalanceAmount from './components/balanceAmount';

class Wallet extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <HomeLayout selectedMenuItem={MENU_ITEMS.WALLET}>
                <PageHeader color={'red'}
                            hasMenu={true}
                            title={this.props.walletName.toUpperCase()} />
                <BalanceAmount />
            </HomeLayout>
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {
        address: state.general.focusedWallet.address,
        walletName: state.general.focusedWallet.name
    }
}

const mapDispatchToProps = {

};

export default WalletWrapper = connect(mapStateToProps, mapDispatchToProps)(Wallet);