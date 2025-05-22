import { useEffect, useState, type FunctionComponent } from "react";
import cls from './Work.module.css'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { changeStatusPhrase, deletePhrase, fetchPhrases } from "../../state/slices/phrases.slice";

interface WorkProps {

}

const Work: FunctionComponent<WorkProps> = () => {

    const [filter, setFilter] = useState<'all' | true | false>('all')
    const [nummerItem, setNummerItem] = useState<number>(0)



    const { error, loading, list } = useAppSelector(state => state.phrases)

    const [item, setItem] = useState(list[nummerItem])


    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhrases({ filterLearned: filter, filterText: '' }))
    }, [filter])

    useEffect(() => {
        setItem(list[nummerItem])
    }, [nummerItem, list])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setNummerItem(0)
        if (value === 'all') {
            setFilter('all');
        } else {
            setFilter(value === 'true');
        }
    };

    const nextCart = () => {
        if (list[nummerItem].is_learned !== item.is_learned) {

            dispatch(changeStatusPhrase({ id: item.id }))
            dispatch(fetchPhrases({ filterLearned: filter, filterText: '' }))
            if (filter === true || filter === false) {
                if (nummerItem >= (list.length - 1)  ) {
                    setNummerItem(0)
                }
                return
            }
        }
        if (nummerItem === (list.length - 1)) {
            setNummerItem(0)
        } else {
            setNummerItem(nummerItem + 1)
        }
    }

    const deletePhraseHundler = (id: number) => {
        dispatch(deletePhrase({ id }))
        if (nummerItem === (list.length - 1)) {
            nextCart()
        }
    }

    const changeStatusHanler = () => {
        setItem({ ...item, is_learned: !item.is_learned })
    }



    return (
        <div className={cls.container}>
            <div className={cls.filter}>
                <select name="" id="" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value='true'>Вивчені</option>
                    <option value='false'>Не вивчені</option>
                </select>
            </div>
            <div className={cls.work}>
                {
                    (loading &&
                        <div className={cls.loading} style={{ fontSize: '40px' }}>loading</div>)
                    ||
                    (error &&
                        <div className={cls.error} style={{ fontSize: '40px' }}>error</div>)
                    ||
                    (!loading && !error && item && <div className={cls.item}>
                        <div>{item.text}</div>
                        <div>{item.translate}</div>
                        <div style={!item.is_learned ? { color: '#aeae27' } : {}}>{item.is_learned ? 'вивчено' : 'в процесі'}</div>
                        <div>
                            <button onClick={changeStatusHanler}>Змінити статус</button>
                            <button onClick={() => { deletePhraseHundler(item.id) }}>Delete</button>
                            <button onClick={nextCart}>Далі</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
}

export default Work;