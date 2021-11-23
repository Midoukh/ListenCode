import React, { Component } from 'react';

import styles from './style.css';
import noInternetImage from '../../assets/no-internet.jpg';
export default function NoInternetConnection(ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false,
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(() => {
          fetch('//google.com', {
            mode: 'no-cors',
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch(() => this.setState({ isDisconnected: true }));
        }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;
      return (
        <div className={styles.Container}>
          {isDisconnected ? (
            <div className={styles.Content}>
              <h1 className={styles.ErrorH1}>Internet Left The Chat 😧 </h1>
              <img
                className={styles.ErrorImage}
                src={noInternetImage}
                alt="no intenrnet"
              />
            </div>
          ) : null}
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}
