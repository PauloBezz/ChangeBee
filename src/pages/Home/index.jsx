import { Header } from './../../components/Header';
import { Main } from './../../components/Main';
import { Footer } from './../../components/Footer';
import { CardSmall } from './../../components/Cards/CardSmall';
import { CardPrice } from './../../components/Cards/CardsPrice';

export function Home() {
    return (
        <>
            <Header />
            <Main title={'Sua mudança é nosso Negócio!'} subtitle={'Desde 1991, estamos carregados de mudança e recomeço pelo Brasil. Conhecemos o peso da dedicação por força de vontade, siga conosco.'} >

                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardPrice />
                <CardPrice />
                <CardPrice />
            </Main >
            <Footer />
        </>
    )
}