"use client";

import React, { useState } from "react";

interface MedicalRecordFormProps {
  onSubmit: (record: { patientId: string; diagnosis: string; treatment: string }) => void;
}

const MedicalRecordForm: React.FC<MedicalRecordFormProps> = ({ onSubmit }) => {
  const [patientId, setPatientId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ patientId, diagnosis, treatment });
    // 폼 초기화
    setPatientId("");
    setDiagnosis("");
    setTreatment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드 구현 */}
      <button type="submit">기록 저장</button>
    </form>
  );
};

export default MedicalRecordForm;
