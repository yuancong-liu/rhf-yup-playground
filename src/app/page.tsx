import { Container } from '@/components/common/layout/container';
import { Link } from '@/components/common/operables/link';
import { Title } from '@/components/common/typography/title';

const Home = () => {
  return (
    <Container direction="flex-col">
      <Title>Home</Title>
      <Container direction='flex-col'>
        <Link href="/basic">Basic</Link>
      </Container>
    </Container>
  );
};

export default Home;
