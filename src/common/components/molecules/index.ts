import React from 'react';

const RowCards = React.lazy(() => import('./RowCards/RowCards'));
const Modal = React.lazy(() => import('./Modal/Modal'));
const AddNameModal = React.lazy(() => import('./AddNameModal/AddNameModal'));
const ChangeName = React.lazy(() => import('./ChangeName/ChangeName'));

export { RowCards, Modal, AddNameModal, ChangeName };
