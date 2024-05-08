import { Header } from './../../components/Header';
import { Main } from './../../components/Main';
import { Footer } from './../../components/Footer';
import { CardSmall } from './../../components/Cards/CardSmall';
import { CardPrice } from './../../components/Cards/CardsPrice';

export function Home() {
    return (
        <>
            <Header />
            <Main>

                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardPrice/> 
                <CardPrice/> 
                <CardPrice/> 
            </Main>
            <Footer />
        </>
    )
}