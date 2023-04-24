export default function GreetingCard( {firstName, age} ) {
return (
    <div className="GreetingCard">
        <h3>Hello {firstName} {age}! </h3>
    </div>
    )

}