import React, { Component } from 'react';

class LangBar extends Component {
    render() {
        const { selectedlang } = this.props;
        return (
            <div>
                <table style={{ width: '100%' }}>
                    <tbody>
                        {
                            this.props.langs.map((lng) => {
                                return (
                                    <tr key={lng.id} className={'langItem ' + (selectedlang === lng.id ? 'selected' : '')}
                                        onClick={() => { this.props.changeSelectedLang(lng.id) }}
                                        title={lng.code}>
                                        <td>{lng.name}</td>
                                    </tr>);
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default LangBar;