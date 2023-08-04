import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
// import Link from 'react';
// import { SHOP } from '../components/routers/routes';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div
      id="homepageCover"
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
        fontSize: 20,
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>
      <p>{user.first_name}</p>
      <div className="banner-desc">
        <p><em>The Perfect Pair...</em></p>
        <p>At Feet First we truly put your feet first! See and feel the difference walking in our shoes makes!</p>
        <Button
          variant="dark"
          type="button"
          size="lg"
          className="edit-btn"
          onClick={() => {
            router.push('/shop');
          }}
        >
          Shop Now &rarr;
        </Button>
      </div>
    </div>
  );
}

export default Home;
