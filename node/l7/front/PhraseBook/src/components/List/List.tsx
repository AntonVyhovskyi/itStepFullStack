import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import cls from './List.module.css'
import { fetchPhrases } from '../../state/slices/phrases.slice';

interface ListProps {

}

const List: FunctionComponent<ListProps> = () => {


    const { list, loading, error } = useAppSelector(state => state.phrases)
    const [filter, setFilter] = useState<'all' | true | false>('all')
    const [searchWithText, setSearchWithText] = useState<string>('')

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhrases({ filterLearned: filter, filterText: searchWithText }))
    }, [filter, searchWithText])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === 'all') {
            setFilter('all');
        } else {
            setFilter(value === 'true');
        }
    };

    return (

        <div className={cls.container}>
            <div className={cls.search}>
                <div className={cls.text}>
                    <input type="text" onChange={(e) => { setSearchWithText(e.target.value) }} />
                </div>
                <div>
                    <select name="" id="" onChange={handleChange}>
                        <option value="all">All</option>
                        <option value='true'>Вивчені</option>
                        <option value='false'>Не вивчені</option>
                    </select>
                </div>
            </div>
            {(loading &&
                <div className={cls.loading} style={{ fontSize: '40px' }}>loading</div>)
                ||
                (error &&
                    <div className={cls.error} style={{ fontSize: '40px' }}>error</div>)
                ||
                <div className={cls.list}>
                    {
                        list.map(el => (
                            <div className={cls.item} key={el.id} >
                                <div>{el.text}</div>
                                <div>{el.translate}</div>
                                <div style={!el.is_learned? {color: '#aeae27'} : {}}>{el.is_learned ? 'вивчено' : 'в процесі'}</div>

                            </div>
                        ))
                    }
                </div>

            }
        </div>
    );
}

export default List;