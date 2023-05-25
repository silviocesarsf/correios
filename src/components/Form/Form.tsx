import Button from "../Inputs/Button/Button";
import Textfield from "../Inputs/Textfields/Textfield";
import "./styles.css";
import { useState } from "react";

const Form = () => {
	// Format currency
	const [amount, setAmount] = useState("");
	const [numericValue, setNumericValue] = useState(0);

	const handleAmountChange = (e: any) => {
		const rawValue = e.target.value.replace(/\D/g, "");
		const formattedValue = rawValue
			? (parseInt(rawValue) / 100).toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
			  })
			: "";
		setAmount(formattedValue);
		setNumericValue(rawValue ? parseInt(rawValue) : 0);
	};

	return (
		<form action="" className="form-container">
			<div className="form-title">
				<h2>Cálculo de Preços e Prazos de Entrega</h2>
			</div>
			<div className="form-content">
				{/* Company code */}
				<Textfield label="Cód. da Empresa" type="number" />
				<Textfield label="Senha da Empresa" type="number" />
				{/* Company CEP */}
				<div className="form-row">
					<Textfield
						label="CEP Origem"
						type="number"
						placeholder="00000-000"
					/>
					<Textfield
						label="CEP Destino"
						type="number"
						placeholder="00000-000"
					/>
				</div>
				{/* Shipping type  */}
				<Textfield label="Tipo de envio" select={true}>
					<option value="Sedex">Sedex</option>
					<option value="Sedex 10">Sedex 10</option>
					<option value="Sedex 12">Sedex 12</option>
					<option value="PAC">PAC</option>
				</Textfield>
				{/* Package weight and format */}
				<div className="form-row">
					<Textfield
						label="Peso"
						placeholder="Kg"
						type="number"
					/>
					<Textfield label="Formato da embalagem" select={true}>
						<option value="Caixa/Pacote">
							Formato Caixa / Pacote
						</option>
						<option value="Rolo/Prisma">
							Formato Rolo / Prisma
						</option>
					</Textfield>
				</div>
				{/* Package dimensions */}
				<div className="form-row">
					<Textfield
						placeholder="cm"
						label="Comprimento"
						type="number"
					/>
					<Textfield
						placeholder="cm"
						label="Altura"
						type="number"
					/>
					<Textfield
						placeholder="cm"
						label="Largura"
						type="number"
					/>
					<Textfield
						placeholder="cm"
						label="Diâmetro"
						type="number"
					/>
				</div>
				{/* Shipping Method */}
				<Textfield label="Mão própia" select={true}>
					<option value="não">Não</option>
					<option value="sim">Sim</option>
				</Textfield>
				{/* Declared value */}
				<Textfield
					type="text"
					label="Valor declarado"
					value={amount}
					onChange={handleAmountChange}
					placeholder="R$ 0,00"
				/>
				{/* Acknowledgment of receipt */}
				<Textfield label="Aviso de recebimento" select={true}>
					<option value="não">Não</option>
					<option value="sim">Sim</option>
				</Textfield>
				<Button>Enviar Consulta</Button>
			</div>
		</form>
	);
};

export default Form;
