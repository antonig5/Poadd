import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import DeleteIcon from "../icons/DeleteIcon";

export default function ModalSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = (item) => {
    console.log("Buscando:", item);
  };
  const addToHistory = () => {
    if (searchValue.trim() !== "") {
      setSearchHistory((prevHistory) => new Set([...prevHistory, searchValue]));
      setSearchValue(""); // Limpiar el valor del input después de agregarlo al historial
    }
  };
  const handleDelete = (itemToDelete) => {
    setSearchHistory((prevHistory) => {
      const historyArray = Array.from(prevHistory);
      const updatedHistory = historyArray.filter(
        (item) => item !== itemToDelete
      );
      return new Set(updatedHistory);
    });
  };
  return (
    <>
      <Button
        variant="flat"
        onClick={onOpen}
        startContent={<SearchIcon size={18} />}
      >
        Buscar...
      </Button>
      <Modal
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Input
                  placeholder="Busca en PoAdd"
                  variant="underlined"
                  startContent={<SearchIcon size={18} />}
                  value={searchValue}
                  onChange={handleInputChange}
                />
              </ModalHeader>
              <ModalBody>
                <p>Recientes</p>

                {[...searchHistory].map((item, index) => (
                  <a
                    key={index}
                    onClick={() => handleSearch(item)}
                    className="block w-full rounded-2xl  px-4 py-4 bg-gray text-white rounded hover:bg-primary-50 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <SearchIcon size={18} className="mr-2" />
                      <span className="text-xl">{item}</span>
                    </div>

                    <a
                      onClick={() => handleDelete(item)}
                      className="text-red-500 cursor-pointer"
                    >
                      <DeleteIcon size={24} />
                    </a>
                  </a>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={addToHistory}>
                  Buscar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
