import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function BarraLateralPerfil(prop) {
  return (
    <Box >
      <img src={`https://github.com/${prop.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'th3daniel';
  const amigos = ['wesleyhjpr', 'udison', 'RaFaElMOW', 'ClebersonSiqueira', 'LucasAndradeSilva', 'marcobrunodev'];
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="areaPerfil" style={{ gridArea: 'areaPerfil' }}>
          <BarraLateralPerfil githubUser={githubUser}/>
        </div>
        
        <div className="areaBemVindo" style={{ gridArea: 'areaBemVindo' }}>
          <Box >
            <h1 className="title">
              Bem vindo
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        
        <div className="areaComunidade" style={{ gridArea: 'areaComunidade' }}>
          <Box >Comunidade</Box>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTite">
              Meus Amigos ({amigos.length})
            </h2>
            <ul>
              {amigos.map((item)=> {
                return( 
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
    </>
  )
}
