import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        initialIsFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        initialIsFollowing: false
    },
    {
        userName:'dembouz',
        name: 'Ousmane Dembélé',
        initialIsFollowing: true
    }
]

//Se mapea el array de users y se retorna un boton con la info de cada user.
export function App () {
    return (
        <section className='app'>
            {
                users.map(user => {
                    const {userName, name, initialIsFollowing} = user;
                    return (
                        <TwitterFollowCard key={userName} userName={userName} name={name} initialIsFollowing={initialIsFollowing} />
                    )
                })
            }
        </section>
    )
}