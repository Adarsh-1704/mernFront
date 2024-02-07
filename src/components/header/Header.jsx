import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';
import logo from '../image/logo.jpg';

const Image = styled('img')`
    padding: 15px;
    height: 60px;
`;

const Component = styled(AppBar)`
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const LogoContainer = styled('div')`
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <Component>
                <LogoContainer>
                    <Image src={logo} alt="" />
                </LogoContainer>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='https://bafybeiahqdgpgaf4ejypswppvnm5cqavqkmoe7qdjovu47i5i436jnk2uq.ipfs.sphn.link/' target='blank'>HEALTHHIVE</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;
