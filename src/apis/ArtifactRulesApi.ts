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
    RuleViolationError,
    RuleViolationErrorFromJSON,
    RuleViolationErrorToJSON,
} from '../models';

export interface CreateArtifactRuleRequest {
    groupId: string;
    artifactId: string;
    rule: Rule;
}

export interface DeleteArtifactRuleRequest {
    groupId: string;
    artifactId: string;
    rule: DeleteArtifactRuleRuleEnum;
}

export interface DeleteArtifactRulesRequest {
    groupId: string;
    artifactId: string;
}

export interface GetArtifactRuleConfigRequest {
    groupId: string;
    artifactId: string;
    rule: GetArtifactRuleConfigRuleEnum;
}

export interface ListArtifactRulesRequest {
    groupId: string;
    artifactId: string;
}

export interface TestUpdateArtifactRequest {
    groupId: string;
    artifactId: string;
    body: Blob;
}

export interface UpdateArtifactRuleConfigRequest {
    groupId: string;
    artifactId: string;
    rule: UpdateArtifactRuleConfigRuleEnum;
    rule2: Rule;
}

/**
 * 
 */
export class ArtifactRulesApi extends runtime.BaseAPI {

    /**
     * Adds a rule to the list of rules that get applied to the artifact when adding new versions.  All configured rules must pass to successfully add a new artifact version.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * Rule (named in the request body) is unknown (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Create artifact rule
     */
    async createArtifactRuleRaw(requestParameters: CreateArtifactRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling createArtifactRule.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling createArtifactRule.');
        }

        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling createArtifactRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RuleToJSON(requestParameters.rule),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a rule to the list of rules that get applied to the artifact when adding new versions.  All configured rules must pass to successfully add a new artifact version.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * Rule (named in the request body) is unknown (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Create artifact rule
     */
    async createArtifactRule(requestParameters: CreateArtifactRuleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createArtifactRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a rule from the artifact.  This results in the rule no longer applying for this artifact.  If this is the only rule configured for the artifact, this is the  same as deleting **all** rules, and the globally configured rules now apply to this artifact.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Delete artifact rule
     */
    async deleteArtifactRuleRaw(requestParameters: DeleteArtifactRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteArtifactRule.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling deleteArtifactRule.');
        }

        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling deleteArtifactRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules/{rule}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))).replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a rule from the artifact.  This results in the rule no longer applying for this artifact.  If this is the only rule configured for the artifact, this is the  same as deleting **all** rules, and the globally configured rules now apply to this artifact.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Delete artifact rule
     */
    async deleteArtifactRule(requestParameters: DeleteArtifactRuleRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteArtifactRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes all of the rules configured for the artifact.  After this is done, the global rules apply to the artifact again.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)
     * Delete artifact rules
     */
    async deleteArtifactRulesRaw(requestParameters: DeleteArtifactRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteArtifactRules.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling deleteArtifactRules.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all of the rules configured for the artifact.  After this is done, the global rules apply to the artifact again.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)
     * Delete artifact rules
     */
    async deleteArtifactRules(requestParameters: DeleteArtifactRulesRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteArtifactRulesRaw(requestParameters, initOverrides);
    }

    /**
     * Returns information about a single rule configured for an artifact.  This is useful when you want to know what the current configuration settings are for a specific rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Get artifact rule configuration
     */
    async getArtifactRuleConfigRaw(requestParameters: GetArtifactRuleConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Rule>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getArtifactRuleConfig.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling getArtifactRuleConfig.');
        }

        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling getArtifactRuleConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules/{rule}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))).replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleFromJSON(jsonValue));
    }

    /**
     * Returns information about a single rule configured for an artifact.  This is useful when you want to know what the current configuration settings are for a specific rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)
     * Get artifact rule configuration
     */
    async getArtifactRuleConfig(requestParameters: GetArtifactRuleConfigRequest, initOverrides?: RequestInit): Promise<Rule> {
        const response = await this.getArtifactRuleConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all rules configured for the artifact.  The set of rules determines how the content of an artifact can evolve over time.  If no rules are configured for an artifact, the set of globally configured rules are used.  If no global rules  are defined, there are no restrictions on content evolution.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)
     * List artifact rules
     */
    async listArtifactRulesRaw(requestParameters: ListArtifactRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<RuleType>>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling listArtifactRules.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling listArtifactRules.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RuleTypeFromJSON));
    }

    /**
     * Returns a list of all rules configured for the artifact.  The set of rules determines how the content of an artifact can evolve over time.  If no rules are configured for an artifact, the set of globally configured rules are used.  If no global rules  are defined, there are no restrictions on content evolution.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)
     * List artifact rules
     */
    async listArtifactRules(requestParameters: ListArtifactRulesRequest, initOverrides?: RequestInit): Promise<Array<RuleType>> {
        const response = await this.listArtifactRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Tests whether an update to the artifact\'s content *would* succeed for the provided content. Ultimately, this applies any rules configured for the artifact against the given content to determine whether the rules would pass or fail, but without actually updating the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in  JSON format for *most* of the supported types, but may be in another format for a few  (for example, `PROTOBUF`).  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * The provided artifact type is not recognized (HTTP error `404`) * A server error occurred (HTTP error `500`)  When successful, this operation simply returns a *No Content* response.  This response indicates that the content is valid against the configured content rules for the  artifact (or the global rules if no artifact rules are enabled).
     * Test update artifact
     */
    async testUpdateArtifactRaw(requestParameters: TestUpdateArtifactRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling testUpdateArtifact.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling testUpdateArtifact.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling testUpdateArtifact.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/test`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Tests whether an update to the artifact\'s content *would* succeed for the provided content. Ultimately, this applies any rules configured for the artifact against the given content to determine whether the rules would pass or fail, but without actually updating the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in  JSON format for *most* of the supported types, but may be in another format for a few  (for example, `PROTOBUF`).  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * The provided artifact type is not recognized (HTTP error `404`) * A server error occurred (HTTP error `500`)  When successful, this operation simply returns a *No Content* response.  This response indicates that the content is valid against the configured content rules for the  artifact (or the global rules if no artifact rules are enabled).
     * Test update artifact
     */
    async testUpdateArtifact(requestParameters: TestUpdateArtifactRequest, initOverrides?: RequestInit): Promise<void> {
        await this.testUpdateArtifactRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the configuration of a single rule for the artifact.  The configuration data is specific to each rule type, so the configuration of the `COMPATIBILITY` rule  is in a different format from the configuration of the `VALIDITY` rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`) 
     * Update artifact rule configuration
     */
    async updateArtifactRuleConfigRaw(requestParameters: UpdateArtifactRuleConfigRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Rule>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling updateArtifactRuleConfig.');
        }

        if (requestParameters.artifactId === null || requestParameters.artifactId === undefined) {
            throw new runtime.RequiredError('artifactId','Required parameter requestParameters.artifactId was null or undefined when calling updateArtifactRuleConfig.');
        }

        if (requestParameters.rule === null || requestParameters.rule === undefined) {
            throw new runtime.RequiredError('rule','Required parameter requestParameters.rule was null or undefined when calling updateArtifactRuleConfig.');
        }

        if (requestParameters.rule2 === null || requestParameters.rule2 === undefined) {
            throw new runtime.RequiredError('rule2','Required parameter requestParameters.rule2 was null or undefined when calling updateArtifactRuleConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/groups/{groupId}/artifacts/{artifactId}/rules/{rule}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"artifactId"}}`, encodeURIComponent(String(requestParameters.artifactId))).replace(`{${"rule"}}`, encodeURIComponent(String(requestParameters.rule))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RuleToJSON(requestParameters.rule2),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RuleFromJSON(jsonValue));
    }

    /**
     * Updates the configuration of a single rule for the artifact.  The configuration data is specific to each rule type, so the configuration of the `COMPATIBILITY` rule  is in a different format from the configuration of the `VALIDITY` rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`) 
     * Update artifact rule configuration
     */
    async updateArtifactRuleConfig(requestParameters: UpdateArtifactRuleConfigRequest, initOverrides?: RequestInit): Promise<Rule> {
        const response = await this.updateArtifactRuleConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum DeleteArtifactRuleRuleEnum {
    Validity = 'VALIDITY',
    Compatibility = 'COMPATIBILITY'
}
/**
    * @export
    * @enum {string}
    */
export enum GetArtifactRuleConfigRuleEnum {
    Validity = 'VALIDITY',
    Compatibility = 'COMPATIBILITY'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateArtifactRuleConfigRuleEnum {
    Validity = 'VALIDITY',
    Compatibility = 'COMPATIBILITY'
}
