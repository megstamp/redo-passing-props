import GreetingCard from "./GreetingCard"

export default function GreetingList() {
    return(
        <section className="GreetingList">
            <h2>GreetingList</h2>
            <GreetingCard firstName="David" age={41} />
            <GreetingCard firstName="Jonathan" age={21} />
            <GreetingCard firstName="Jasmine" age={20} />
            <GreetingCard firstName="Barbara" age={45} />
</section>
    )
}