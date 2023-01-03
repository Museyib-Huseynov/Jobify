import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby echo park food truck street art tousled artisan man braid
            actually migas jianbing. Williamsburg semiotics humblebrag,
            skateboard keytar sus direct trade hot chicken blog squid. Brunch
            blog poutine locavore readymade echo park PBR&B. Shaman flannel
            crucifix messenger bag iceland wolf organic.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};
export default Landing;
