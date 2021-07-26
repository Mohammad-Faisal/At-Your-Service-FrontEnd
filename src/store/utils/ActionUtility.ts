import HttpErrorResponseModel from './HttpErrorResponseModel';

export class ActionUtility {
    static getFulfilledAction = (actionName: string) => `${actionName}/fulfilled`;

    static getPendingAction = (actionName: string) => `${actionName}/pending`;

    static _createAction(type: string, payload: any = undefined, error = false, meta = null) {
        return { type, payload, error, meta };
    }
}
