import styles from '../styles/pages/Home.module.css';
import { motion, keyframes } from "framer-motion";
import { useUserContext } from '../hooks/userHooks/UserProvider';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import withAuth from '../components/hoc/withAuth';
import Card from '../components/cards/reminder-card';

const Home = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>

      <div>
        <div className='flex justify-between'>
          <h2 className={styles.title}>Dashboard</h2>

          <motion.button className="btn btn-square btn-outline"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 28 50 50" preserveAspectRatio="xMidYMid meet">
              <path d="M 24 3.6347656 L 23.5 3.9238281 L 19.5 6.234375 L 19 6.5234375 L 19 7.0996094 L 19 14.607422 L 12.5 10.853516 L 12 10.564453 L 11.5 10.853516 L 7.5 13.164062 L 7 13.453125 L 7 14.029297 L 7 20.960938 L 7 21.537109 L 7.5 21.826172 L 19 28.466797 L 19 41.740234 L 19 42.316406 L 19.498047 42.605469 L 25.498047 46.076172 L 25.998047 46.365234 L 26.498047 46.076172 L 30.498047 43.765625 L 30.998047 43.476562 L 30.998047 42.900391 L 30.998047 35.392578 L 37.498047 39.146484 L 37.998047 39.435547 L 38.498047 39.146484 L 42.498047 36.835938 L 42.998047 36.546875 L 42.998047 35.970703 L 42.998047 29.039062 L 42.998047 28.462891 L 42.498047 28.173828 L 31 21.533203 L 31 8.2597656 L 31 7.6835938 L 30.501953 7.3945312 L 24.501953 3.9238281 L 24 3.6347656 z M 24 5.078125 L 29.5 8.2597656 L 26 10.277344 L 20.5 7.0996094 L 24 5.078125 z M 20.25 7.5332031 L 25.75 10.710938 L 25.75 24.423828 A 0.250025 0.250025 0 0 0 25.875 24.638672 L 37.75 31.496094 L 37.75 37.847656 L 30.125 33.443359 L 30.103516 33.431641 L 26.125 31.134766 A 0.250025 0.250025 0 0 0 25.980469 31.101562 A 0.250025 0.250025 0 0 0 25.75 31.351562 L 25.75 44.777344 L 20.25 41.595703 L 20.25 27.890625 A 0.250025 0.250025 0 0 0 20.125 27.673828 L 8.25 20.816406 L 8.25 14.462891 L 19.875 21.175781 A 0.250025 0.250025 0 0 0 20.25 20.958984 L 20.25 16.339844 L 20.25 7.5332031 z M 29.75 8.6933594 L 29.75 21.966797 L 26.25 23.990234 L 26.25 10.710938 L 29.75 8.6933594 z M 12 12.007812 L 19.75 16.484375 L 19.75 20.525391 L 8.4980469 14.03125 L 12 12.007812 z M 30 22.398438 L 41.501953 29.041016 L 38 31.0625 L 26.498047 24.421875 L 30 22.398438 z M 41.75 29.472656 L 41.75 35.826172 L 38.25 37.847656 L 38.25 31.496094 L 41.75 29.472656 z M 26.25 31.785156 L 29.75 33.804688 L 29.75 42.755859 L 26.25 44.777344 L 26.25 31.785156 z"></path>
            </svg>
          </motion.button>
        </div>


        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        {/* <p className={styles['info-text']}>
          Edit the <code>pages/index.js</code> file to populate this page.
        </p> */}

        <Card></Card>
      </div>
    </Layout>
  );
}

export default withAuth(Home);