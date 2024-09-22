import React from 'react';



const BlockedPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>This site is blocked!</h1>
      <p style={styles.paragraph}>
        You have spent more than the allowed time on this site today.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
  },
  header: {
    color: '#721c24',
    fontSize: '2rem',
  },
  paragraph: {
    color: '#721c24',
    fontSize: '1.2rem',
  },
};

export default BlockedPage;
