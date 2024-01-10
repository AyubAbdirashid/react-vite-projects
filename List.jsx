
const List = ({people}) => {
  return (
    <>
      {people.map((value )=> {
       const {id,name,age,image} = value
       return <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name} come to daydy in here</h4>
          <p>{age} years</p>
        </div>
       </article>
      })}
    </>
  );
};

export default List;
