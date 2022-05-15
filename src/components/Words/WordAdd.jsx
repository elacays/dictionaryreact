import React, { Component } from 'react';

class WordAdd extends Component {
    constructor() {
        super();
        this.state = {
            wordToAdd: { id: '0', word: '', meaning: '', lngid: 1 }
        }
    }
    render() {
        const updateItem = (id) => {
            let updatedWord = this.state.words.filter(c => c.id === id)
            this.setState({ wordToAdd: updatedWord })
            console.log(updatedWord)
        }
        const setWordVals = (event) => {
            this.state.wordToAdd[event.target.name] = event.target.value;
            console.log(this.state.wordToAdd);

        }
        const saveWord = () => {
            this.props.refreshWords(this.state.wordToAdd);

            alert('başarıyla kaydedildi');
            this.props.returnList();
            this.state.wordToAdd = {}
        }
        return (
            <div>
                <button className='btn btn-secondary' onClick={this.props.returnList}>Return Back</button>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            id:<input onChange={setWordVals} name='id' className='form-control' readOnly type='text' />

                        </div>
                        <div className='form-group'>
                            word:<input onChange={setWordVals} name='word' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            meaning:<input onChange={setWordVals} name='meaning' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            lngid:
                            <select className='form-control' name='lngid' onChange={setWordVals}>
                                {
                                    this.props.langs.map((lng) => {
                                        return <option title={lng.name} value={lng.id} key={lng.id}>{lng.code}</option>
                                    })
                                }


                            </select>
                        </div>
                        <div className='form-group' name='kaydet'>
                            <button className="btn btn-success" onClick={saveWord}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordAdd;