-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 179.188.16.25
-- Generation Time: 24-Out-2024 às 00:08
-- Versão do servidor: 5.7.32-35-log
-- PHP Version: 5.6.40-0+deb8u12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yasosaude`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_ACESSO_MEDICO`
--

CREATE TABLE `00_YASO_ACESSO_MEDICO` (
  `ID` int(11) NOT NULL,
  `ID_CUSTOMIZADO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `NOME_SOCIAL` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `ESPECIALIDADE` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `GENERO` enum('Masculino','Feminino','Outro') COLLATE latin1_general_ci NOT NULL,
  `EMAIL` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `USUARIO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `SENHA` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `FOTO_PERFIL` varchar(255) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_ACESSO_MEDICO`
--

INSERT INTO `00_YASO_ACESSO_MEDICO` (`ID`, `ID_CUSTOMIZADO`, `NOME`, `NOME_SOCIAL`, `ESPECIALIDADE`, `GENERO`, `EMAIL`, `USUARIO`, `SENHA`, `FOTO_PERFIL`) VALUES
(1, 'YM00.00.0.00001', 'Dra. Maria Oliveira do Prado', 'Maria Prado', 'Pediatria', 'Feminino', 'maria.oliveira@email.com', 'maria.prado', '123456', 'https://i.ibb.co/vBmmtNH/medica-perfil.webp');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_ALERGIA`
--

CREATE TABLE `00_YASO_ALERGIA` (
  `ID_ALERGIA` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `TIPO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `ESCALA` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `DESCRICAO` text COLLATE latin1_general_ci NOT NULL,
  `CUIDADOS` text COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_ALERGIA`
--

INSERT INTO `00_YASO_ALERGIA` (`ID_ALERGIA`, `NUMERO_YASO`, `NOME`, `TIPO`, `ESCALA`, `DESCRICAO`, `CUIDADOS`) VALUES
(6, 'Y00.00.0.00001', 'Alergia a Leite', 'Alimentar', 'Grave', 'Reações severas ao ingerir produtos com leite.', 'Evitar consumo de produtos lácteos.'),
(7, 'Y00.00.0.00001', 'Alergia a Ovos', 'Alimentar', 'Moderada', 'Dificuldade respiratória e urticária ao ingerir ovos.', 'Evitar produtos com ovos.'),
(8, 'Y00.00.0.00001', 'Alergia a Penicilina', 'Medicamentosa', 'Grave', 'Reação anafilática após administração de penicilina.', 'Evitar o uso de penicilina e derivados.'),
(9, 'Y00.00.0.00001', 'Alergia a Ibuprofeno', 'Medicamentosa', 'Moderada', 'Inchaço e coceira após uso de ibuprofeno.', 'Evitar uso de ibuprofeno e buscar alternativas.'),
(10, 'Y00.00.0.00001', 'Alergia a Pólen', 'Respiratória', 'Leve', 'Espirros e congestão nasal ao contato com pólen.', 'Usar antialérgicos e evitar áreas com alta concentração de pólen.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_CONSULTAS`
--

CREATE TABLE `00_YASO_CONSULTAS` (
  `ID_CONSULTA` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `DATA` date NOT NULL,
  `MEDICO` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `DESCRICAO` text COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_CONSULTAS`
--

INSERT INTO `00_YASO_CONSULTAS` (`ID_CONSULTA`, `NUMERO_YASO`, `DATA`, `MEDICO`, `DESCRICAO`) VALUES
(1, 'Y00.00.0.00001', '2024-01-10', 'Dr. João Silva', 'Consulta de rotina, sem alterações detectadas.'),
(2, 'Y00.00.0.00001', '2024-02-15', 'Dra. Maria Souza', 'Paciente apresentou sintomas de gripe, sem complicações graves.'),
(3, 'Y00.00.0.00001', '2024-03-20', 'Dr. Carlos Pereira', 'Exames laboratoriais solicitados para investigação de anemia.'),
(4, 'Y00.00.0.00001', '2024-04-05', 'Dra. Fernanda Costa', 'Consulta pós-operatória, recuperação dentro do esperado.'),
(5, 'Y00.00.0.00001', '2024-05-10', 'Dr. Pedro Lima', 'Acompanhamento de tratamento para hipertensão, paciente respondendo bem.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_EXAMES`
--

CREATE TABLE `00_YASO_EXAMES` (
  `ID_EXAME` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `TIPO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `MEDICO_SOLICITANTE` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `DESCRICAO` text COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_EXAMES`
--

INSERT INTO `00_YASO_EXAMES` (`ID_EXAME`, `NUMERO_YASO`, `NOME`, `TIPO`, `MEDICO_SOLICITANTE`, `DESCRICAO`) VALUES
(1, 'Y00.00.0.00001', 'Hemograma Completo', 'Laboratorial', 'Dr. João Silva', 'Exame de rotina, sem alterações detectadas.'),
(2, 'Y00.00.0.00001', 'Raio-X de Tórax', 'Imagem', 'Dr. Carlos Pereira', 'Imagem sem sinais de infecção ou lesão pulmonar.'),
(3, 'Y00.00.0.00001', 'Eletrocardiograma', 'Cardiologia', 'Dr. Pedro Lima', 'Resultado normal, sem arritmias ou alterações significativas.'),
(4, 'Y00.00.0.00001', 'Ultrassom Abdominal', 'Imagem', 'Dra. Fernanda Costa', 'Fígado e rins sem sinais de anormalidades.'),
(5, 'Y00.00.0.00001', 'Glicemia de Jejum', 'Laboratorial', 'Dr. Maria Souza', 'Glicemia dentro dos parâmetros normais.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_MEDIC_USO`
--

CREATE TABLE `00_YASO_MEDIC_USO` (
  `ID_MEDICAMENTO` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `TIPO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `DATA` date NOT NULL,
  `DOSAGEM` int(11) NOT NULL,
  `PERIODO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `MEDICO_SOLICITANTE` varchar(100) COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_MEDIC_USO`
--

INSERT INTO `00_YASO_MEDIC_USO` (`ID_MEDICAMENTO`, `NUMERO_YASO`, `NOME`, `TIPO`, `DATA`, `DOSAGEM`, `PERIODO`, `MEDICO_SOLICITANTE`) VALUES
(1, 'Y00.00.0.00001', 'Ibuprofeno', 'Analgésico', '2024-01-05', 400, 'A cada 8 horas', 'Dr. João Silva'),
(2, 'Y00.00.0.00001', 'Paracetamol', 'Antitérmico', '2024-02-10', 500, 'A cada 6 horas', 'Dra. Maria Souza'),
(3, 'Y00.00.0.00001', 'Amoxicilina', 'Antibiótico', '2024-03-15', 875, 'A cada 12 horas', 'Dr. Pedro Lima'),
(4, 'Y00.00.0.00001', 'Losartana', 'Antihipertensivo', '2024-04-01', 50, 'Uma vez ao dia', 'Dra. Fernanda Costa'),
(5, 'Y00.00.0.00001', 'Omeprazol', 'Inibidor de Bomba de Prótons', '2024-05-20', 20, 'Uma vez ao dia', 'Dr. Carlos Pereira');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_PERFIL`
--

CREATE TABLE `00_YASO_PERFIL` (
  `ID_PERFIL` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `PLANO_SAUDE` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `NUMERO_SUS` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_SANGUINEO` varchar(5) COLLATE latin1_general_ci DEFAULT NULL,
  `ONR` enum('SIM','NÃO') COLLATE latin1_general_ci DEFAULT 'NÃO',
  `NOME_CONTATO_1` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TELEFONE_1` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `NOME_CONTATO_2` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TELEFONE_2` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `MEDICO` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO` text COLLATE latin1_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_PERFIL`
--

INSERT INTO `00_YASO_PERFIL` (`ID_PERFIL`, `NUMERO_YASO`, `PLANO_SAUDE`, `NUMERO_SUS`, `TIPO_SANGUINEO`, `ONR`, `NOME_CONTATO_1`, `TELEFONE_1`, `NOME_CONTATO_2`, `TELEFONE_2`, `MEDICO`, `DESCRICAO`) VALUES
(1, 'Y00.00.0.00001', '12345678901', '123456789', 'O+', 'SIM', 'Maria Silva', '(011) 99999-1111', 'João Souza', '(011) 99999-2222', 'Dr. João Lima', 'Paciente com histórico de hipertensão.'),
(2, 'Y00.00.0.00002', '98765432101', '987654321', 'A+', 'NÃO', 'Carlos Pereira', '(011) 99999-3333', 'Ana Souza', '(011) 99999-4444', 'Dra. Maria Santos', 'Paciente com alergia a medicamentos.'),
(3, 'Y00.00.0.00003', '11223344501', '112233445', 'B+', 'NÃO', 'Fernanda Lima', '(011) 99999-5555', 'Marcos Silva', '(011) 99999-6666', 'Dr. Pedro Costa', 'Paciente com histórico de diabetes.'),
(4, 'Y00.00.0.00004', '99887766501', '998877665', 'AB+', 'SIM', 'Juliana Souza', '(011) 99999-7777', 'Paulo Silva', '(011) 99999-8888', 'Dra. Ana Ribeiro', 'Paciente com histórico de problemas respiratórios.'),
(5, 'Y00.00.0.00005', '22334455601', '223344556', 'O-', 'SIM', 'Bruno Almeida', '(011) 99999-9999', 'Tatiana Silva', '(011) 99999-0000', 'Dr. Ricardo Nunes', 'Paciente com histórico de doenças cardíacas.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_PERFIL_COMPLETO`
--

CREATE TABLE `00_YASO_PERFIL_COMPLETO` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `USUARIO` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `SENHA` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `EMAIL` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `TELEFONE` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `FOTO` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `ID_VACINA` int(11) DEFAULT NULL,
  `NOME_VACINA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TITULO_VACINA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DATA_VACINA` date DEFAULT NULL,
  `MEDICO_VACINA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `ANEXO_IMAGEM_VACINA` longblob,
  `ID_PERFIL` int(11) DEFAULT NULL,
  `PLANO_SAUDE` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `NUMERO_SUS` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_SANGUINEO` varchar(5) COLLATE latin1_general_ci DEFAULT NULL,
  `ONR` enum('SIM','NÃO') COLLATE latin1_general_ci DEFAULT 'NÃO',
  `NOME_CONTATO_1` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TELEFONE_1` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `NOME_CONTATO_2` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TELEFONE_2` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `MEDICO_EMERGENCIA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_EMERGENCIA` text COLLATE latin1_general_ci,
  `ID_RESULTADO` int(11) DEFAULT NULL,
  `NOME_RESULTADO` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_RESULTADO` text COLLATE latin1_general_ci,
  `ANEXO_IMAGEM_RESULTADO_1` longblob,
  `ANEXO_IMAGEM_RESULTADO_2` longblob,
  `ANEXO_IMAGEM_RESULTADO_3` longblob,
  `ANEXO_PDF_RESULTADO` longblob,
  `ID_CONSULTA` int(11) DEFAULT NULL,
  `DATA_CONSULTA` date DEFAULT NULL,
  `MEDICO_CONSULTA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_CONSULTA` text COLLATE latin1_general_ci,
  `ID_ALERGIA` int(11) DEFAULT NULL,
  `NOME_ALERGIA` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_ALERGIA` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `ESCALA_ALERGIA` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_ALERGIA` text COLLATE latin1_general_ci,
  `CUIDADOS_ALERGIA` text COLLATE latin1_general_ci,
  `ID_EXAME` int(11) DEFAULT NULL,
  `NOME_EXAME` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_EXAME` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `MEDICO_SOLICITANTE_EXAME` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_EXAME` text COLLATE latin1_general_ci,
  `ID_NOVO_EXAME` int(11) DEFAULT NULL,
  `NOME_NOVO_EXAME` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_NOVO_EXAME` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `MEDICO_SOLICITANTE_NOVO_EXAME` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `DESCRICAO_NOVO_EXAME` text COLLATE latin1_general_ci,
  `ID_MEDICAMENTO` int(11) DEFAULT NULL,
  `NOME_MEDICAMENTO` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `TIPO_MEDICAMENTO` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `DATA_MEDICAMENTO` date DEFAULT NULL,
  `DOSAGEM_MEDICAMENTO` int(11) DEFAULT NULL,
  `PERIODO_MEDICAMENTO` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `MEDICO_SOLICITANTE_MEDICAMENTO` varchar(100) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_RESULTADOS`
--

CREATE TABLE `00_YASO_RESULTADOS` (
  `ID_RESULTADO` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `DESCRICAO` text COLLATE latin1_general_ci NOT NULL,
  `ANEXO_IMAGEM_1` longblob,
  `ANEXO_IMAGEM_2` longblob,
  `ANEXO_IMAGEM_3` longblob,
  `ANEXO_PDF` longblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_RESULTADOS`
--

INSERT INTO `00_YASO_RESULTADOS` (`ID_RESULTADO`, `NUMERO_YASO`, `NOME`, `DESCRICAO`, `ANEXO_IMAGEM_1`, `ANEXO_IMAGEM_2`, `ANEXO_IMAGEM_3`, `ANEXO_PDF`) VALUES
(1, 'Y00.00.0.00001', 'Hemograma Completo', 'Exame laboratorial sem alterações significativas.', NULL, NULL, NULL, NULL),
(2, 'Y00.00.0.00001', 'Raio-X de Tórax', 'Imagem torácica normal, sem sinais de doenças pulmonares.', NULL, NULL, NULL, NULL),
(3, 'Y00.00.0.00001', 'Ultrassom Abdominal', 'Exame de imagem com fígado e rins sem alterações.', NULL, NULL, NULL, NULL),
(4, 'Y00.00.0.00001', 'Eletrocardiograma', 'Eletrocardiograma dentro dos parâmetros normais.', NULL, NULL, NULL, NULL),
(5, 'Y00.00.0.00001', 'Teste de Glicemia', 'Exame de glicemia dentro dos limites normais.', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_TOKEN`
--

CREATE TABLE `00_YASO_TOKEN` (
  `ESTADO` enum('AUTORIZADO','PENDENTE','SOLICITADO') COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_TOKEN`
--

INSERT INTO `00_YASO_TOKEN` (`ESTADO`) VALUES
('PENDENTE');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_USUARIO`
--

CREATE TABLE `00_YASO_USUARIO` (
  `super_id_usuario` int(11) NOT NULL,
  `nome` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `senha` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `telefone` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `foto` blob,
  `numero_yaso` varchar(20) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_USUARIO`
--

INSERT INTO `00_YASO_USUARIO` (`super_id_usuario`, `nome`, `senha`, `email`, `telefone`, `foto`, `numero_yaso`) VALUES
(1, 'renato', 'Marilia23@23', 'gprorenato@gmail.com', '011 9 8701 3258', NULL, 'Y00.00.00.0001'),
(2, 'livia', 'xFreitasx2024', 'xliviafreitasx@gmail.com', '011 98822 6886', NULL, 'Y00.00.00.0002'),
(3, 'luiz', 'LuizPrendin2024', 'luizprendinfelipe@gmail.com', '11 99943 6643', NULL, 'Y00.00.00.0003');

-- --------------------------------------------------------

--
-- Estrutura da tabela `00_YASO_VACINAS`
--

CREATE TABLE `00_YASO_VACINAS` (
  `ID_VACINA` int(11) NOT NULL,
  `NUMERO_YASO` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `NOME` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `TITULO` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `DATA` date NOT NULL,
  `MEDICO` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `ANEXO_IMAGEM` longblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `00_YASO_VACINAS`
--

INSERT INTO `00_YASO_VACINAS` (`ID_VACINA`, `NUMERO_YASO`, `NOME`, `TITULO`, `DATA`, `MEDICO`, `ANEXO_IMAGEM`) VALUES
(1, 'Y00.00.0.00001', 'Vacina BCG', 'Vacina contra tuberculose', '2024-01-05', 'Dr. João Silva', NULL),
(2, 'Y00.00.0.00001', 'Vacina Hepatite B', 'Vacina contra hepatite B', '2024-01-10', 'Dra. Maria Souza', NULL),
(3, 'Y00.00.0.00001', 'Vacina Pentavalente', 'Vacina contra difteria, tétano, coqueluche, hepatite B e haemophilus influenzae tipo b', '2024-01-15', 'Dr. Pedro Lima', NULL),
(4, 'Y00.00.0.00001', 'Vacina Poliomielite', 'Vacina contra poliomielite', '2024-01-20', 'Dra. Fernanda Costa', NULL),
(5, 'Y00.00.0.00001', 'Vacina Rotavírus', 'Vacina contra rotavírus', '2024-01-25', 'Dr. Carlos Pereira', NULL),
(6, 'Y00.00.0.00001', 'Vacina Pneumocócica', 'Vacina contra pneumococo', '2024-02-05', 'Dr. Ricardo Nunes', NULL),
(7, 'Y00.00.0.00001', 'Vacina Meningocócica C', 'Vacina contra meningococo C', '2024-02-10', 'Dra. Ana Ribeiro', NULL),
(8, 'Y00.00.0.00001', 'Vacina Febre Amarela', 'Vacina contra febre amarela', '2024-02-15', 'Dr. João Lima', NULL),
(9, 'Y00.00.0.00001', 'Vacina Sarampo', 'Vacina contra sarampo', '2024-02-20', 'Dra. Maria Santos', NULL),
(10, 'Y00.00.0.00001', 'Vacina Varicela', 'Vacina contra varicela', '2024-02-25', 'Dr. Pedro Costa', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `00_YASO_ACESSO_MEDICO`
--
ALTER TABLE `00_YASO_ACESSO_MEDICO`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `id_customizado` (`ID_CUSTOMIZADO`),
  ADD UNIQUE KEY `email` (`EMAIL`),
  ADD UNIQUE KEY `usuario` (`USUARIO`);

--
-- Indexes for table `00_YASO_ALERGIA`
--
ALTER TABLE `00_YASO_ALERGIA`
  ADD PRIMARY KEY (`ID_ALERGIA`);

--
-- Indexes for table `00_YASO_CONSULTAS`
--
ALTER TABLE `00_YASO_CONSULTAS`
  ADD PRIMARY KEY (`ID_CONSULTA`);

--
-- Indexes for table `00_YASO_EXAMES`
--
ALTER TABLE `00_YASO_EXAMES`
  ADD PRIMARY KEY (`ID_EXAME`);

--
-- Indexes for table `00_YASO_MEDIC_USO`
--
ALTER TABLE `00_YASO_MEDIC_USO`
  ADD PRIMARY KEY (`ID_MEDICAMENTO`);

--
-- Indexes for table `00_YASO_PERFIL`
--
ALTER TABLE `00_YASO_PERFIL`
  ADD PRIMARY KEY (`ID_PERFIL`);

--
-- Indexes for table `00_YASO_PERFIL_COMPLETO`
--
ALTER TABLE `00_YASO_PERFIL_COMPLETO`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `00_YASO_RESULTADOS`
--
ALTER TABLE `00_YASO_RESULTADOS`
  ADD PRIMARY KEY (`ID_RESULTADO`);

--
-- Indexes for table `00_YASO_USUARIO`
--
ALTER TABLE `00_YASO_USUARIO`
  ADD PRIMARY KEY (`super_id_usuario`),
  ADD UNIQUE KEY `numero_yaso` (`numero_yaso`);

--
-- Indexes for table `00_YASO_VACINAS`
--
ALTER TABLE `00_YASO_VACINAS`
  ADD PRIMARY KEY (`ID_VACINA`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `00_YASO_ACESSO_MEDICO`
--
ALTER TABLE `00_YASO_ACESSO_MEDICO`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `00_YASO_ALERGIA`
--
ALTER TABLE `00_YASO_ALERGIA`
  MODIFY `ID_ALERGIA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `00_YASO_CONSULTAS`
--
ALTER TABLE `00_YASO_CONSULTAS`
  MODIFY `ID_CONSULTA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `00_YASO_EXAMES`
--
ALTER TABLE `00_YASO_EXAMES`
  MODIFY `ID_EXAME` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `00_YASO_MEDIC_USO`
--
ALTER TABLE `00_YASO_MEDIC_USO`
  MODIFY `ID_MEDICAMENTO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `00_YASO_PERFIL`
--
ALTER TABLE `00_YASO_PERFIL`
  MODIFY `ID_PERFIL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `00_YASO_PERFIL_COMPLETO`
--
ALTER TABLE `00_YASO_PERFIL_COMPLETO`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `00_YASO_RESULTADOS`
--
ALTER TABLE `00_YASO_RESULTADOS`
  MODIFY `ID_RESULTADO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `00_YASO_USUARIO`
--
ALTER TABLE `00_YASO_USUARIO`
  MODIFY `super_id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `00_YASO_VACINAS`
--
ALTER TABLE `00_YASO_VACINAS`
  MODIFY `ID_VACINA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
