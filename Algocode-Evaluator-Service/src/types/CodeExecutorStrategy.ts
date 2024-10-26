export default interface CodeExecutorStrategy {
    execute(code: string, inputTestCase: string, outputTestCase: string) : Promise<ExecutionResponse>;
};

// export default interface CodeExecutorStrategy {
//     execute(code: string, inputTestCases: string[], outputTestCases: string[]): Promise<ExecutionResponse[]>;
// };


export type ExecutionResponse = {output:string, status: string};