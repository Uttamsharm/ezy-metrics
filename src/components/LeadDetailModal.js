
import React from 'react';

const LeadDetailModal = ({ lead, onClose }) => {
  if (!lead) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Lead Details</h3>
        <p><strong>Name:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Phone:</strong> {lead.phone}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LeadDetailModal;
