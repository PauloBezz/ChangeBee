import { Header } from './../../components/Header';
import { Main } from './../../components/Main';
import { Footer } from './../../components/Footer';
import ContentSmall, { ContentPrice } from '../../components/Cards';
import Costumer from '../../components/Costumer';
import Video from '../../components/Video';
import Partner from '../../components/Partner';


export function Home() {
    return (
        <>
            <Header />
            <Main titleWhite={'Sua'} titleYellow={'mudança'} tWhiteSecond={'é'} tWhiteThree={'nosso'} tYellowSecond={'Negócio!'} subtitle={'Desde 1991, estamos carregados de mudança e recomeço pelo Brasil. Conhecemos o peso da dedicação por força de vontade, siga conosco.'} />
            <ContentSmall />
            <Costumer />
            <Video title={'Conheça nosso sonho da ChangeBee'} description={'Assista para saber mais quem somos!'} />
            <ContentPrice/>
            <Partner/>
            <Footer />
        </>
    )
}