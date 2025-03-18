
    
const EventHandler = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
    
  }
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
  }
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h1>Event Handler example</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandler
