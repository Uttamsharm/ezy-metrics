
import React, { useState } from 'react';
import dummyLeads from '../data/dummyLeads';
import LeadDetailModal from './LeadDetailModal';
import './LeadList.css';


const LeadList = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (lead) => {
    setSelectedLead(lead);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedLead(null);
    setModalVisible(false);
  };

  return (
    <div>
      <p>Lead Management</p>
      <ul>
        {dummyLeads.map((lead) => (
          <li key={lead.id}>
            <span>{lead.name}</span>
            <button onClick={() => openModal(lead)}>View Details</button>
          </li>
        ))}
      </ul>
      {modalVisible && (
        <LeadDetailModal lead={selectedLead} onClose={closeModal} />
      )}
    </div>
  );
};

export default LeadList;
