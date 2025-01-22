import React, { useState } from 'react';
import LiqudityLock from "../LiquidityLock/LiquidityLock";
import TokenLock from "../TokenLock/TokenLock";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";

const useStyles = makeStyles({
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px"
  },
  tabContainer: {
    display: "flex",
    marginBottom: "2px",
    borderBottom: "1px solid #e0e0e0"
  },
  tab: {
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    background: "transparent",
    border: "none",
    borderBottom: "2px solid transparent",
    transition: "all 0.3s",
    "&:hover": {
      color: "#2196f3"
    }
  },
  activeTab: {
    color: "#2196f3",
    borderBottom: "2px solid #2196f3"
  },
  cardHeader: {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
  },
  cardTitle: {
    color: "#fff",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "1.3rem"
  },
  cardSubtitle: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  }
});

const TokenandLiqLock = () => {
    const [activeTab, setActiveTab] = useState('token');
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card>
                <CardHeader className={classes.cardHeader}>
                    <h4 className={classes.cardTitle}>
                        {activeTab === 'token' ? 'Token Lock' : 'Liquidity Lock'}
                    </h4>
                    <p className={classes.cardSubtitle}>
                        Lock your tokens to build trust with your investors
                    </p>
                </CardHeader>
                
                <div className={classes.tabContainer}>
                    <button 
                        className={`${classes.tab} ${
                            activeTab === 'token' ? classes.activeTab : ''
                        }`}
                        onClick={() => setActiveTab('token')}
                    >
                        Token Lock
                    </button>
                    <button 
                        className={`${classes.tab} ${
                            activeTab === 'liquidity' ? classes.activeTab : ''
                        }`}
                        onClick={() => setActiveTab('liquidity')}
                    >
                        Liquidity Lock
                    </button>
                </div>
                
                <div>
                    {activeTab === 'token' ? <TokenLock /> : <LiqudityLock />}
                </div>
            </Card>
        </div>
    );
};

export default TokenandLiqLock;