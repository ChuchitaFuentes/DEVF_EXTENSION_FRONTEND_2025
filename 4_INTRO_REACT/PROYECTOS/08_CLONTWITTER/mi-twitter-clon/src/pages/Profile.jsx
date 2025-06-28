import { Link } from "react-router-dom";

const Profile = ({user}) => {
  return (
    <div>
        <h1>Perfil</h1>
        {user && <p>Nombre de usuario: {user.username}</p>}
        <Link to="/">
          <button>Ver pagina principal</button>
        </Link>
        
    </div>
  )
}

export default Profile;