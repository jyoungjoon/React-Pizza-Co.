import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  // useNavigate provides a navigate function that can take the user back to previous 'working' (not re-rendered component) page:
  // Because back button will take the user back to previously rendered component:
  const navigate = useNavigate();
  const error = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
