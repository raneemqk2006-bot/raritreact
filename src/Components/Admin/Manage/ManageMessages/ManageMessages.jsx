import React, { useState } from 'react';
export default function ManageMessage() {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: 'Sara A.', rating: 5, comment: 'Amazing skin product! Very hydrating.' },
    { id: 2, name: 'Lina M.', rating: 4, comment: 'Great quality and fast shipping.' }
  ]);

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newFeedback = {
      id: Date.now(),
      name: name.trim() || 'Anonymous',
      rating: Number(rating),
      comment: comment.trim()
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setName('');
    setComment('');
    setRating(5);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <h3 className="text-center mb-4" style={{ fontFamily: 'serif' }}>
        Customer Feedback
      </h3>

      <div className="card p-4 shadow-sm border-0 mb-4 rounded-3 bg-light">
        <h5 className="fw-semibold mb-3">Leave Your Feedback</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-medium">Your Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="e.g. Sarah"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-medium">Rating</label>
            <select
              className="form-select form-select-sm"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
              <option value="4">⭐⭐⭐⭐ (4/5)</option>
              <option value="3">⭐⭐⭐ (3/5)</option>
              <option value="2">⭐⭐ (2/5)</option>
              <option value="1">⭐ (1/5)</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-medium">Feedback / Review</label>
            <textarea
              className="form-control form-control-sm"
              rows="3"
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-dark btn-sm rounded-2 w-100">
            Submit Feedback
          </button>
        </form>
      </div>


      <div className="d-flex flex-column gap-3">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="p-3 border rounded-3 bg-white shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="fw-bold text-dark">{fb.name}</span>
              <span className="text-warning small">
                {'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}
              </span>
            </div>
            <p className="mb-0 text-muted small">{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}