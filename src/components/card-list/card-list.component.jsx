import { Component } from "react";
import CardBox from "../card-box/card-box.component";


const CardList = ({monsters}) => {
    return(
        <div className="card-list">
            {monsters.map((monster)=>{
                //const {name, id, email} = monster;
                return(
                    <CardBox monster={monster} key={monster.id}/>
                );
            })}
        </div>
    )
}
// class CardList extends Component{
//     render(){
//         const {monsters} = this.props;
//         return(
//             <div className="card-list">
//                 {monsters.map((monster)=>{
//                     const {name, id, email} = monster;
//                     return(
//                         <CardBox monster={monster} key={id}/>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
export default CardList;