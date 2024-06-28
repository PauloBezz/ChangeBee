import Shield from "./assets/images/svg/shield.svg"
import speed from "./assets/images/svg/speed.svg"
import squad from "./assets/images/svg/squad.svg"
import quality from "./assets/images/svg/quality.svg"
import { CardSmall } from "./CardSmall"
import { Logo } from "../../assets/Logo"

export const SmallInfo = [
    {
        image: <Logo/>,
        description: 'Seguro contra roubo e com rastreio remoto'
    },
    {
        image: '',
        description: 'Seguro contra roubo e com rastreio remoto'
    },
    {
        image: '',
        description: 'Seguro contra roubo e com rastreio remoto'
    },
    {
        image: '',
        description: 'Seguro contra roubo e com rastreio remoto'
    }

]

export default function ContentSmall() {
    return (
        <section>
            {SmallInfo.map((info, key) => {
                return (
                    <CardSmall
                        key={key}
                        image={info.image}
                        description={info.description} />
                )
            })}
        </section>
    )
}