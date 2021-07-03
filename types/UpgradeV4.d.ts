/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface UpgradeV4Interface extends ethers.utils.Interface {
  functions: {
    "addDevice(address,bytes32)": FunctionFragment;
    "addToAllowlist(address)": FunctionFragment;
    "deleteUpgrade(uint8,uint8)": FunctionFragment;
    "firmwareId()": FunctionFragment;
    "getHash(uint8,uint8)": FunctionFragment;
    "getLatestHash(uint8)": FunctionFragment;
    "getVersion(uint8)": FunctionFragment;
    "initialize(address,uint8,uint8,bytes32)": FunctionFragment;
    "isAllowed(address)": FunctionFragment;
    "isDevice(address)": FunctionFragment;
    "newUpgrade(uint8,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addDevice",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addToAllowlist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteUpgrade",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "firmwareId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHash",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isAllowed", values: [string]): string;
  encodeFunctionData(functionFragment: "isDevice", values: [string]): string;
  encodeFunctionData(
    functionFragment: "newUpgrade",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addDevice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addToAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "firmwareId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLatestHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDevice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newUpgrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NewDevice(address,bytes32)": EventFragment;
    "NewMember(address)": EventFragment;
    "NewUpgrade(uint8,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDevice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewMember"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpgrade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class UpgradeV4 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UpgradeV4Interface;

  functions: {
    addDevice(
      _address: string,
      publicKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addToAllowlist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleteUpgrade(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    firmwareId(overrides?: CallOverrides): Promise<[string]>;

    getHash(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLatestHash(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getVersion(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    initialize(
      _owner: string,
      _minorVersion: BigNumberish,
      _majorVersion: BigNumberish,
      _firmwareId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAllowed(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    isDevice(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    newUpgrade(
      _upgradeType: BigNumberish,
      _ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addDevice(
    _address: string,
    publicKey: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addToAllowlist(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleteUpgrade(
    _upgradeType: BigNumberish,
    _version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  firmwareId(overrides?: CallOverrides): Promise<string>;

  getHash(
    _upgradeType: BigNumberish,
    _version: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getLatestHash(
    _upgradeType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getVersion(
    _upgradeType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  initialize(
    _owner: string,
    _minorVersion: BigNumberish,
    _majorVersion: BigNumberish,
    _firmwareId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAllowed(_address: string, overrides?: CallOverrides): Promise<boolean>;

  isDevice(_address: string, overrides?: CallOverrides): Promise<boolean>;

  newUpgrade(
    _upgradeType: BigNumberish,
    _ipfsHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDevice(
      _address: string,
      publicKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addToAllowlist(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deleteUpgrade(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    firmwareId(overrides?: CallOverrides): Promise<string>;

    getHash(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getLatestHash(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getVersion(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    initialize(
      _owner: string,
      _minorVersion: BigNumberish,
      _majorVersion: BigNumberish,
      _firmwareId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isAllowed(_address: string, overrides?: CallOverrides): Promise<boolean>;

    isDevice(_address: string, overrides?: CallOverrides): Promise<boolean>;

    newUpgrade(
      _upgradeType: BigNumberish,
      _ipfsHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    NewDevice(
      _address?: null,
      publicKey?: null
    ): TypedEventFilter<
      [string, string],
      { _address: string; publicKey: string }
    >;

    NewMember(
      _address?: null
    ): TypedEventFilter<[string], { _address: string }>;

    NewUpgrade(
      _upgradeType?: null,
      ipfsHash?: null
    ): TypedEventFilter<
      [number, string],
      { _upgradeType: number; ipfsHash: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addDevice(
      _address: string,
      publicKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addToAllowlist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleteUpgrade(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    firmwareId(overrides?: CallOverrides): Promise<BigNumber>;

    getHash(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestHash(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVersion(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: string,
      _minorVersion: BigNumberish,
      _majorVersion: BigNumberish,
      _firmwareId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAllowed(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    isDevice(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    newUpgrade(
      _upgradeType: BigNumberish,
      _ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDevice(
      _address: string,
      publicKey: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addToAllowlist(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleteUpgrade(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    firmwareId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHash(
      _upgradeType: BigNumberish,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestHash(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVersion(
      _upgradeType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: string,
      _minorVersion: BigNumberish,
      _majorVersion: BigNumberish,
      _firmwareId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAllowed(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDevice(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newUpgrade(
      _upgradeType: BigNumberish,
      _ipfsHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}