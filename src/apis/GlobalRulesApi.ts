/* tslint:disable */
/* eslint-disable */
/**
 * Apicurio Registry API [v2]
 * Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.  The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.   The supported artifact types include: - Apache Avro schema - AsyncAPI specification - Google protocol buffers - GraphQL schema - JSON Schema - Kafka Connect schema - OpenAPI specification - Web Services Description Language - XML Schema Definition   **Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`. 
 *
 * The version of the OpenAPI document: 2.2.0.Final
 * Contact: apicurio@lists.jboss.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Rule,
    RuleFromJSON,
    RuleToJSON,
    RuleType,
    RuleTypeFromJSON,
    RuleTypeToJSON,
} from '../models';

export interface CreateGlobalRuleRequest {
    rule: Rule;
}

export interface DeleteGlobalRuleRequest {
    rule: RuleType;
}

export interface GetGlobalRuleConfigRequest {
    rule: RuleType;
}

export interface UpdateGlobalRuleConfigRequest {
    rule: RuleType;
    rule2: Rule;
}

/**
 * 
 */
export class GlobalRulesApi extends runtime.BaseAPI {

    /**
     * Adds a rule to the list of globally configured rules.  This operation can fail for the following reasons:  * The rule type is unknown (HTTP error `400`) * The rule already exists (HTTP error `409`) * A server error occurred (HTTP error `500`) 
     * Create global rule
     */
    async createGlobalRuleRaw(requestParameters: CreateGlobalRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling createGlobalRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/rules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RuleToJSON(requestParameters.rule),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a rule to the list of globally configured rules.  This operation can fail for the following reasons:  * The rule type is unknown (HTTP error `400`) * The rule already exists (HTTP error `409`) * A server error occurred (HTTP error `500`) 
     * Create global rule
     */
    async createGlobalRule(requestParameters: CreateGlobalRuleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createGlobalRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes all globally configured rules.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 
     * Delete all global rules
     */
    async deleteAllGlobalRulesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/rules`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all globally configured rules.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 
     * Delete all global rules
     */
    async deleteAllGlobalRules(initOverrides?: RequestInit): Promise<void> {
        await this.deleteAllGlobalRulesRaw(initOverrides);
    }

    /**
     * Deletes a single global rule.  If this is the only rule configured, this is the same as deleting **all** rules.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * Rule cannot be deleted (HTTP error `409`) * A server error occurred (HTTP error `500`) 
     * Delete global rule
     */
    async deleteGlobalRuleRaw(requestParameters: DeleteGlobalRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling deleteGlobalRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/rules/{rule}`.replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a single global rule.  If this is the only rule configured, this is the same as deleting **all** rules.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * Rule cannot be deleted (HTTP error `409`) * A server error occurred (HTTP error `500`) 
     * Delete global rule
     */
    async deleteGlobalRule(requestParameters: DeleteGlobalRuleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteGlobalRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Returns information about the named globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 
     * Get global rule configuration
     */
    async getGlobalRuleConfigRaw(requestParameters: GetGlobalRuleConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Rule>> {
        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling getGlobalRuleConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/rules/{rule}`.replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleFromJSON(jsonValue));
    }

    /**
     * Returns information about the named globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 
     * Get global rule configuration
     */
    async getGlobalRuleConfig(requestParameters: GetGlobalRuleConfigRequest, initOverrides?: RequestInit): Promise<Rule> {
        const response = await this.getGlobalRuleConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of all the currently configured global rules (if any).  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 
     * List global rules
     */
    async listGlobalRulesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<RuleType>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/admin/rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RuleTypeFromJSON));
    }

    /**
     * Gets a list of all the currently configured global rules (if any).  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 
     * List global rules
     */
    async listGlobalRules(initOverrides?: RequestInit): Promise<Array<RuleType>> {
        const response = await this.listGlobalRulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates the configuration for a globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 
     * Update global rule configuration
     */
    async updateGlobalRuleConfigRaw(requestParameters: UpdateGlobalRuleConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Rule>> {
        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling updateGlobalRuleConfig.');
        }

        if (requestParameters.rule2 === null || requestParameters.rule2 === undefined) {
            throw new runtime.RequiredError('rule2','Required parameter requestParameters.rule2 was null or undefined when calling updateGlobalRuleConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/admin/rules/{rule}`.replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RuleToJSON(requestParameters.rule2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleFromJSON(jsonValue));
    }

    /**
     * Updates the configuration for a globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 
     * Update global rule configuration
     */
    async updateGlobalRuleConfig(requestParameters: UpdateGlobalRuleConfigRequest, initOverrides?: RequestInit): Promise<Rule> {
        const response = await this.updateGlobalRuleConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

}