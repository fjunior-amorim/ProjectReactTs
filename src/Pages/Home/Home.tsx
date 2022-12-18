import { Conteiner, Main, Form, Section } from './Home.module';
import { useEffect, useState } from 'react';
import { UserData } from '../../TYpes'; 
import ReactLoading from 'react-loading';
import Header from '../../Components/Header/Header';
import ModalInfo from '../../Components/Modal/ModalInfo';
import axios from 'axios';

function Home() {

    const [ dataFetchingBackup, setDataFetchingBackup ] = useState<UserData[]>([]);
    const [ dataFetching, setDataFetching ] = useState<UserData[]>([]);
    const [ searchCountry, setSearchCountry] = useState("")
    const [ isFetching, setIsFetching ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ search, setSearch ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ dataUser, setDataUser ] = useState<UserData>();

    useEffect(() => {
        axios.get('https://randomuser.me/api/', {
            params: {
                results: 5
            }
        })
        .then(response => {
            setDataFetching(response.data.results);
            setDataFetchingBackup(response.data.results);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setIsFetching(false)
        })
    },[]);

    useEffect(() => {

        if( search.length !== 0 ) {
            const filter = dataFetching.filter( (e) => 
                e.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 || e.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0
            );
            setDataFetching(filter);
        }else {
            setDataFetching(dataFetchingBackup);
        }

    }, [search])

    useEffect(() => {
        if(searchCountry !== '') {
            const filter = dataFetching.filter((e) => e.location.country.toUpperCase().indexOf(searchCountry.toUpperCase())) 
            setDataFetching(filter);
        }else {
            setDataFetching(dataFetchingBackup);
        }
    }, [searchCountry])

    function handleModalOpen(Uselected: UserData) {
        setDataUser(Uselected);
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }
    return (
        <>
            <Conteiner>
                <Header />
                <Main>
                    <h1>Lista dos alunos do curso</h1>
                    {
                        isFetching ? (
                            <div>
                                <ReactLoading type="spin" color='#FFFFFF'/>
                            </div>
                            ) : (
                            <>
                            <Form>
                                <div className='input_form'>
                                    <label htmlFor="name">Pesquizar: </label>
                                    <input 
                                    type="text"
                                    id="name" 
                                    placeholder='nome do aluno'
                                    onChange={(e) => setSearch(e.target.value)}/>
                                </div>
                                <div className='select_form'>
                                    <label htmlFor="name">Nacionalidade: </label>
                                    <select 
                                    name="nacionalidade" 
                                    id="nacionalidade" 
                                    onChange={e => setSearchCountry(e.target.value)}
                                    >

                                        <option>todas</option>
                                        {
                                            dataFetching.map( (e, index) => {
                                                return(
                                                    <>
                                                    <option key={index} value={e.location.country}>{e.location.country}</option>
                                                    </>    
                                                )
                                            })
                                        }
                                        
                                    </select>
                                </div>
                            </Form>
                            <Section>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Sexo</th>
                                            <th>Nacionalidade</th>
                                            <th>Ação</th>
                                        </tr>
                                    </thead>
        
                                    <tbody>
                                        <ModalInfo 
                                        isOpen={modalOpen}
                                        onRequestClose={handleModalClose}
                                        userSelected={dataUser}
                                        />
                                        {
                                            dataFetching.map((e) => {
                                                return (
                                                    <tr key={e.id.name}>
                                                        <td>{`${e.name.first} ${e.name.last}`}</td>
                                                        <td>{e.gender}</td>
                                                        <td>{e.nat}</td>
                                                        <td>
                                                            <button 
                                                            className='btn_action'
                                                            onClick={() => handleModalOpen(e)}>Visualizar</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Section>
                            </>
                        )
                    }
                </Main>
            </Conteiner>
        </>
    );
}
export default Home;