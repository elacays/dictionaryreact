import React, { Component } from 'react';

class WordAdd extends Component {
    constructor() {
        super();
        this.state = {
            wordToAdd: { id: '0', word: '', meaning: '', lngid: 1 }
        }

    }
    componentDidUpdate() {
        // this.setState({wordToAdd:this.props.wordToAddOrUpdate})
    }


    componentDidMount() {
        console.log("did mounth executed:" + this.props.wordToAddOrUpdate);
        this.setState({ wordToAdd: this.props.wordToAddOrUpdate })
    }
    static getDerivedStateFromProps(props, current_state) {
        if (current_state.wordToAdd !== props.wordToAddOrUpdate) {
            return {
                wordToAdd: props.wordToAddOrUpdate
            }
        }
        return null
    }
    render() {
        const { wordToAdd } = this.state;
        const setWordVals = (event) => {
            let existing = wordToAdd;
            existing[event.target.name] = event.target.value;
            this.setState({ wordToAdd: existing });
        }
        const saveWord = () => {
            this.props.refreshWords(this.state.wordToAdd);

            alert('başarıyla kaydedildi');
            this.props.returnList();
        }
        return (
            <div>
                <button className='btn btn-secondary' onClick={this.props.returnList}>Return Back</button>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            id:<input onChange={setWordVals} value={wordToAdd.id} name='id' className='form-control' readOnly type='text' />

                        </div>
                        <div className='form-group'>
                            word:<input onChange={setWordVals} value={wordToAdd.word} name='word' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            meaning:<input onChange={setWordVals} value={wordToAdd.meaning} name='meaning' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            lngid:
                            <select className='form-control' name='lngid' value={wordToAdd.lngid} onChange={setWordVals}>
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