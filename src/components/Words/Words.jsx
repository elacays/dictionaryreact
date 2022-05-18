import React, { Component } from 'react';
import WordAdd from './WordAdd';
import WordList from './WordList';

class Words extends Component {
    constructor() {
        super();
        this.state = {
            words: [
                { id: 1, word: 'white', meaning: 'beyaz', lngid: 2 },
                { id: 2, word: 'black', meaning: 'siyah', lngid: 2 },
                { id: 3, word: 'age', meaning: 'yaş', lngid: 2 },
                { id: 4, word: 'tes', meaning: 'test', lngid: 2 },
                { id: 5, word: 'save', meaning: 'kaydetmek', lngid: 2 },
                { id: 6, word: 'yaş', meaning: 'age', lngid: 1 },
                { id: 7, word: 'kırmızı', meaning: 'red', lngid: 1 },
                { id: 8, word: 'kara', meaning: 'black', lngid: 1 },
            ],
            searchKeyword: '',
            searchKeywordMe: '',
            page: 'list',
            wordToAddOrUpdate: { id: 0, word: '', meaning: '', lngid: 2 }
        }
    }

    render() {

        const retrunToListPage = () => {
            this.setState({ page: 'list' });
        }

        const setFilterVal = (event) => {
            this.setState({ searchKeyword: event.target.value });
        }

        const setFilterValMe = (event) => {
            this.setState({ searchKeywordMe: event.target.value });
        }

        let filterd = this.state.words.filter(c => c.lngid === this.props.selectedlang || this.props.selectedlang === 0);

        const refreshWords = (word) => {
            let words = this.state.words;
            word.id = words.slice(-1)[0].id + 1;
            words.push(word);
            changelang(word.lngid);
            //this.setState({words:words});
            this.setState({ words });
        }
        const changelang = (lng) => {
            console.log(this.props.changeSelectedLang);
            this.props.changeSelectedLang(lng)
        }

        const updateItem = (wrdId) => {
            this.setState({ wordToAddOrUpdate: this.state.words.filter(c => c.id === wrdId)[0] });
        }
        const deleteItem = (id) => {
            let words = this.state.words.filter(c => c.id !== id)
            this.setState({ words })
            //alert("başarıyla silindi")
        }

        if (this.state.searchKeyword) {
            filterd = filterd.filter(c => c.word.startsWith(this.state.searchKeyword));
        }
        if (this.state.searchKeywordMe) {
            filterd = filterd.filter(c => c.meaning.startsWith(this.state.searchKeywordMe));
        }
        if (this.state.page === 'list') {
            return (

                <div>

                    <div className='row'>
                        <div className='col-md-4'><input placeholder='word' className='form-control' onChange={setFilterVal} type='text' /></div>
                        <div className='col-md-4'><input placeholder='meaning' className='form-control' onChange={setFilterValMe} type='text' /></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'><WordList deleteItem={deleteItem} updateItem={updateItem} words={filterd} /></div>
                        <div className='col-md-4'><WordAdd wordToAddOrUpdate={this.state.wordToAddOrUpdate} langs={this.props.langs} refreshWords={refreshWords} returnList={retrunToListPage} /></div>
                    </div>
                    <button className="btn btn-success" onClick={() => { this.setState({ page: 'add' }) }}>Yeni</button>
                </div>
            );
        }
        else {
            return <div><WordAdd wordToAddOrUpdate={this.state.wordToAddOrUpdate} langs={this.props.langs} refreshWords={refreshWords} returnList={retrunToListPage} /></div>
        }
    }
}

export default Words;