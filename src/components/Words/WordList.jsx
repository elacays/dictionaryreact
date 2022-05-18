import React, { Component } from 'react';

class WordList extends Component {
    render() {

        return (
            <div>

                <table className='wordsTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Word</th>
                            <th>Meaning</th>
                            <th>lng</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.words.map((wrd) => {
                            return (<tr key={wrd.id}>
                                <td>{wrd.id}</td>
                                <td>{wrd.word}</td>
                                <td>{wrd.meaning}</td>
                                <td>{wrd.lngid}</td>
                                <td><i className="bi bi-trash" onClick={() => { this.props.deleteItem(wrd.id) }} ></i>
                                    <i className="bi bi-gear" onClick={() => { this.props.updateItem(wrd.id) }}></i></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WordList;