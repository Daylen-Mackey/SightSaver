import React, { useState, useEffect } from 'react';
import { getBlockedList, setBlockedList } from '../utils';
const BlockSites: React.FC = () => {
  const [newSite, setNewSite] = useState<string>(''); // State for new site input
  const [blockedSites, setBlockedSites] = useState<string[]>([]); // State for blocked sites

  // Fetch blocked sites from chrome storage when the component mounts
  useEffect(() => {
    getBlockedList().then((list) => {
        setBlockedSites(list)});
  }, []);

  // Function to add a new site to the blocked list
  const addSite = () => {
    if (newSite.trim() === '') return;

    const updatedBlockedSites = [...blockedSites, newSite.trim()];

    setBlockedList(updatedBlockedSites);
    setBlockedSites(updatedBlockedSites);
    setNewSite('');
  };

  // Function to remove (unblock) a site
  const removeSite = (siteToRemove: string) => {
    // Filter out the site to remove
    console.log(`Removing site: ${siteToRemove}`);
    const updatedBlockedSites = blockedSites.filter(site => site !== siteToRemove);
    console.log(`Updated blocked sites: ${updatedBlockedSites}`);
    setBlockedList(updatedBlockedSites);
    setBlockedSites(updatedBlockedSites);

  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Manage Blocked Sites</h1>

      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter site to block"
          value={newSite}
          onChange={(e) => setNewSite(e.target.value)}
          style={styles.input}
        />
        <button onClick={addSite} style={styles.addButton}>
          Block Site
        </button>
      </div>

      <ul style={styles.siteList}>
        {blockedSites.length === 0 ? (
          <p>No sites are currently blocked.</p>
        ) : (
          blockedSites.map((site, index) => (
            <li key={index} style={styles.siteItem}>
              {site}
              <button
                onClick={() => removeSite(site)}
                style={styles.unblockButton}
              >
                Unblock
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

// Inline styles for basic styling
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center' as const,
  },
  header: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  siteList: {
    listStyleType: 'none',
    padding: 0,
  },
  siteItem: {
    color: '#333',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    marginBottom: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unblockButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BlockSites;
