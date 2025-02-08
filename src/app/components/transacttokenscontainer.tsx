"use client";
import { PreparedTransaction } from "thirdweb";
import { TransactionButton } from "thirdweb/react";
import { TransactionReceipt } from "thirdweb/transaction";

interface TransactTokensContainerProps {
  transaction: PreparedTransaction<any> | Promise<PreparedTransaction<any>>;
  handleSuccess?: (receipt: TransactionReceipt) => void;
  handleError?: (error: Error) => void;
}

const TransactTokensContainer: React.FC<TransactTokensContainerProps> = ({ transaction, handleSuccess, handleError }) => {
  return (
    <div className="flex items-center gap-x-6"> {/* Consistent spacing */}
      <p className="text-white text-sm font-medium">Numtokens</p>
      <TransactionButton
        transaction={() => transaction}
        onTransactionConfirmed={handleSuccess}
        onError={handleError}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Confirm Transaction
      </TransactionButton>
    </div>
  );
};

export default TransactTokensContainer;