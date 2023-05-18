import { useState } from 'react';
import style from './header.module.css';

export const Header = () => {
    const [text, setText] = useState('');

    const handleInputText = (e) => {
        setText(e.target.value);
    }

    return (
        <header className={style.header}>
            <div>
                <h1>Blog</h1>
                
                <input type="text" onChange={handleInputText} value={text}  placeholder='Pesquise no Blog'/>
            </div>
        </header>
    );
}