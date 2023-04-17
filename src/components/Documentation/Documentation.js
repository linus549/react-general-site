/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import TextSection from "components/styled/TextSection";
import Important from "components/Documentation/Important";

function Documentation() {
  return (
    <>
      <h1>Documentation</h1>

      <TextSection>
        <h2 id="overview">Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel
          pretium <a href="#">lectus quam</a>.
        </p>
        <p>
          Risus quis varius quam quisque id diam vel quam. Varius duis at
          consectetur lorem donec massa. Sagittis eu volutpat odio facilisis
          mauris <a href="#">sit amet massa vitae</a>. Molestie a iaculis at
          erat pellentesque adipiscing commodo elit. Fusce ut placerat orci
          nulla pellentesque dignissim enim. Mauris sit amet massa vitae tortor
          condimentum lacinia quis.
        </p>

        <Important>
          Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
          Dolor morbi non arcu risus. Consequat ac felis donec et odio
          pellentesque diam volutpat commodo dore.
        </Important>
      </TextSection>

      <TextSection>
        <h2 id="introduction">Introduction</h2>
        <p>
          Faucibus a pellentesque sit amet porttitor eget dolor morbi. Laoreet
          suspendisse interdum consectetur libero id faucibus nisl. Posuere ac
          ut consequat semper viverra nam. Suspendisse in est ante in nibh
          mauris cursus. Amet nisl purus in mollis nunc sed. Volutpat ac
          tincidunt vitae semper quis lectus nulla at volutpat.
        </p>

        <h3 id="subheading-0">Subheading</h3>
        <p>
          Faucibus a pellentesque sit amet porttitor eget dolor morbi. Laoreet
          suspendisse interdum consectetur libero id faucibus nisl. Posuere ac
          ut consequat semper viverra nam. Suspendisse in est ante in nibh
          mauris cursus. Amet nisl purus in mollis nunc sed. Volutpat ac
          tincidunt vitae semper quis <a href="#">lectus nulla at volutpat</a>.
        </p>

        <List>
          <li>Vitae</li>
          <li>Id volutpat lacus</li>
          <li>Imperdiet sed</li>
          <li>Elementum nibh tellus</li>
        </List>

        <p>
          Id velit ut tortor pretium viverra suspendisse potenti nullam.
          Maecenas volutpat blandit aliquam etiam. Nibh mauris cursus mattis
          molestie a iaculis at erat. Nulla facilisi morbi tempus iaculis.
          Porttitor massa id neque aliquam vestibulum morbi blandit cursus
          risus.
        </p>

        <h3 id="subheading-1">Subheading</h3>
        <p>
          Tellus in metus vulputate eu scelerisque felis. Amet dictum sit amet
          justo donec enim. Lorem ipsum dolor sit amet. Vel pretium lectus quam
          id leo in. Malesuada proin libero nunc consequat interdum varius.
          Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. At
          consectetur lorem donec massa sapien. Sodales ut etiam sit amet nisl
          purus in. At erat pellentesque adipiscing commodo. Sapien eget mi
          proin sed libero. Vitae turpis massa sed elementum.
        </p>
        <p>
          <a href="#">Sed viverra ipsum</a> nunc aliquet bibendum enim
          facilisis. Arcu risus quis varius quam quisque. Tortor at auctor urna
          nunc. Nec dui nunc mattis enim ut tellus elementum. Malesuada proin
          libero nunc consequat interdum varius. Ipsum faucibus vitae aliquet
          nec ullamcorper sit amet risus.
        </p>
      </TextSection>

      <TextSection>
        <h2 id="basic-concepts">Basic Concepts</h2>
        <p>
          Turpis cursus in hac habitasse platea dictumst quisque. Sit amet
          venenatis urna cursus eget nunc scelerisque viverra mauris. Faucibus
          purus in massa tempor nec feugiat nisl. Pretium vulputate sapien nec
          sagittis aliquam malesuada. Imperdiet massa tincidunt nunc pulvinar
          sapien. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
        </p>

        <h3 id="subheading-2">Subheading</h3>
        <p>
          Metus aliquam eleifend mi in <a href="#">nulla posuere</a>. Eget arcu
          dictum varius duis at consectetur lorem donec. Morbi tempus iaculis
          urna id volutpat lacus laoreet non curabitur. Enim nec dui nunc mattis
          enim. Eu consequat ac felis donec et odio pellentesque. Ultricies mi
          quis hendrerit dolor magna eget est lorem ipsum.
        </p>

        <Important>
          Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
          Dolor morbi non arcu risus. Consequat ac felis donec et odio
          pellentesque diam volutpat commodo dore.
        </Important>

        <h3 id="subheading-3">Subheading</h3>
        <p>
          Sed arcu non odio euismod lacinia at quis. Urna duis convallis
          convallis tellus id interdum velit laoreet. Molestie a iaculis at
          erat. Imperdiet sed euismod nisi porta lorem mollis. Sollicitudin ac
          orci phasellus egestas tellus rutrum tellus pellentesque. Etiam tempor
          orci eu lobortis <a href="#">elementum nibh tellus</a>.
        </p>
        <p>
          Auctor augue mauris augue neque gravida. Neque egestas congue quisque
          egestas diam in arcu cursus. Rhoncus mattis rhoncus urna neque
          viverra. Tincidunt arcu non sodales neque sodales ut etiam. Vitae
          congue eu consequat ac felis donec. Id eu nisl nunc mi ipsum faucibus
          vitae aliquet nec.
        </p>

        <h3 id="subheading-4">Subheading</h3>
        <p>
          Massa tincidunt nunc pulvinar sapien et ligula. Leo integer malesuada
          nunc vel risus commodo viverra maecenas accumsan. Blandit cursus risus
          at ultrices. Eros donec ac odio tempor orci dapibus ultrices in
          iaculis. Quisque egestas diam in arcu cursus euismod quis viverra.
          Ullamcorper malesuada proin libero nunc. Blandit volutpat maecenas
          volutpat blandit aliquam.
        </p>
      </TextSection>

      <TextSection>
        <h2 id="summary">Summary</h2>
        <p>
          Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.
          Mattis aliquam faucibus purus in massa tempor nec feugiat. Aenean vel
          elit scelerisque mauris pellentesque pulvinar. Vestibulum lorem sed
          risus ultricies. <a href="#">Interdum</a> consectetur libero id
          faucibus nisl tincidunt eget. Fermentum odio eu feugiat pretium nibh
          ipsum consequat nisl.
        </p>
        <p>
          <a href="#">Amet consectetur</a> adipiscing elit duis tristique
          sollicitudin nibh. Non odio euismod lacinia at quis. Orci dapibus
          ultrices in iaculis nunc sed augue lacus viverra. Ipsum nunc aliquet
          bibendum enim. Lectus mauris ultrices eros in. Felis imperdiet proin
          fermentum leo. Commodo odio aenean sed adipiscing diam donec
          adipiscing tristique risus.
        </p>
      </TextSection>
    </>
  );
}

const List = styled.ul`
  color: ${({ theme }) => theme.textAlt};
  margin-bottom: var(--spacing-md);
  list-style: square inside;
`;

export default Documentation;
