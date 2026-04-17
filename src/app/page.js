import CounterDiv from "./components/CounterDiv";
import FriendCard from "./components/FriendCard";
import Friends from "./components/Friends";
import Header from "./components/Header";


export default function Home() {
  return <>
   <Header></Header>
   <CounterDiv></CounterDiv>
   <Friends></Friends>
   {/* <FriendCard></FriendCard> */}
  </>;
}
