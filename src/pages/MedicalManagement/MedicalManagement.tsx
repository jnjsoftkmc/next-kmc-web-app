"use client";

import React from "react";
import styles from "./MedicalManagement.module.css";
import AppointmentList from "./components/AppointmentList";
import MedicalRecordForm from "./components/MedicalRecordForm";
import { useMedicalRecords } from "./hooks/useMedicalRecords";

const MedicalManagement: React.FC = () => {
  const { addMedicalRecord } = useMedicalRecords();

  return (
    <div className={styles.container}>
      <h1>진료 관리</h1>
      <AppointmentList />
      <MedicalRecordForm onSubmit={addMedicalRecord} />
      {/* 의료 기록 목록 표시 등 추가 기능 */}
    </div>
  );
};

export default MedicalManagement;
