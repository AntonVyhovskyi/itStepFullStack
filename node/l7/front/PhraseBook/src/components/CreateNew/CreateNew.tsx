import { useState } from 'react';
import cls from './CreateNew.module.css';
import axios from 'axios';

interface CreateNewProps {

}

const CreateNew: React.FC<CreateNewProps> = () => {
    const [text, setText] = useState('');
    const [translate, setTranslate] = useState('');
    const [succes, setSucces] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const handleAdd = async () => {
        if (!text.trim() || !translate.trim()) return;
        try {
            await axios.post('http://localhost:3000/phrases', { text, translate })
            setText('');
            setTranslate('');
            setSucces(true)
            setTimeout(() => {
                setSucces(false)
            },3000)
        } catch (err) {
            setError(true)
            setTimeout(() => {
                setError(false)
            },3000)
        }

    };

    return (
        <div className={cls.container}>
            <input
                className={cls.input}
                type="text"
                placeholder="Текст"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                className={cls.input}
                type="text"
                placeholder="Переклад"
                value={translate}
                onChange={(e) => setTranslate(e.target.value)}
            />
            <button className={cls.button} onClick={handleAdd}>
                Додати
            </button>
            {succes && 
            <div style={{color: 'green'}}>Додано</div>
            }
            {error && 
            <div style={{color: 'red'}}>Щось не так</div>
            }
        </div>
    );
};

export default CreateNew;