import { describe, before, beforeEach, afterEach, it } from './../setup'
// unit
import scrape from './../../main/services/scrape'
// mocks
import plainOldMockObject from './../mocks/others/plainOldMockObject'
import redisODMMock, { redisModelObjectMock } from './../mocks/lib/odm/redisODM'

describe('Scrape', () => {
  let
    mocks,
    getBaseUrl,
    fetchData,
    convertXMLToJSON,
    redisODM,
    redisModelObject,
    url,
    baseUrl,
    fetchedData,
    singleJsonData,
    multipleJsonData,
    singlePassedData,
    positiveReply

  before(() => {
    url = 'https://github.com/timeline'
    baseUrl = 'https://github.com/'
    fetchedData = { data: '<xml>some data</xml>', otherField: 'otherField' }
    singleJsonData = {
      feed: {
        entry: [
          {
            id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
            author: [{
              name: ['ansibot'],
              uri: ['https://github.com/ansibot']
            }],
            updated: ['2018-03-01T23:58:35Z'],
            otherFields: [{
              otherField1: ['otherField1'],
              otherField2: ['otherField2']
            }]
          }
        ]
      }
    }
    multipleJsonData = {
      feed: {
        entry: [
          {
            id: ['tag:github.com,2008:IssueCommentEvent/7319278825'],
            author: [{
              name: ['ansibot'],
              uri: ['https://github.com/ansibot']
            }],
            updated: ['2018-03-01T23:58:35Z'],
            otherFields: [{
              otherField1: ['otherField1'],
              otherField2: ['otherField2']
            }]
          },
          {
            id: ['tag:github.com,2008:AnotherEvent/7319278826'],
            author: [{
              name: ['anotherAuthor'],
              uri: ['https://github.com/anotherAuthor']
            }],
            updated: ['2015-23-02T21:18:25Z'],
            otherFields: [{
              otherField1: ['otherField2'],
              otherField2: ['otherField3']
            }]
          }
        ]
      }
    }
    singlePassedData = {
      key: 'ansibot',
      data: {
        event: 'IssueCommentEvent',
        author: {
          name: 'ansibot',
          uri: 'ansibot'
        },
        updateTime: new Date(Date.parse('2018-03-01T23:58:35Z'))
      }
    }
    positiveReply = 'OK'
  })

  beforeEach(() => {
    getBaseUrl = plainOldMockObject()
    fetchData = plainOldMockObject()
    convertXMLToJSON = plainOldMockObject()
    redisODM = redisODMMock()
    redisModelObject = redisModelObjectMock()
    mocks = [ getBaseUrl, fetchData, convertXMLToJSON, redisODM.create,
      redisModelObject.save ]
    getBaseUrl.once().withExactArgs({ url }).resolves(baseUrl)
    fetchData.once().withExactArgs(url).resolves(fetchedData)
    convertXMLToJSON.once().withExactArgs(fetchedData.data)
  })

  afterEach(() => mocks.forEach(mock => mock.verify()))

  describe('When scraping', () => {
    describe('When fetching single data', () => {
      beforeEach(() => {
        convertXMLToJSON.resolves(singleJsonData)
        redisODM.create.once().withExactArgs(singlePassedData)
          .returns(redisModelObject)
        redisModelObject.save.once().withExactArgs().resolves(positiveReply)
      })

      it('should return a promise', () =>
        scrape(
          { url, getBaseUrl, fetchData, convertXMLToJSON, odm: redisODM }
        )().should.be.a('promise'))

      it('should persist single data', () =>
        scrape(
          { url, getBaseUrl, fetchData, convertXMLToJSON, odm: redisODM }
        )().should.eventually.equalTo([positiveReply]))
    })

    describe('When fetching multiple data', () => {
      beforeEach(() => {
        convertXMLToJSON.resolves(multipleJsonData)
        redisODM.create.exactly(multipleJsonData.feed.entry.length)
          .returns(redisModelObject)
        redisModelObject.save.exactly(multipleJsonData.feed.entry.length)
          .resolves(positiveReply)
      })

      it('should persist mutiple data', () =>
        scrape(
          { url, getBaseUrl, fetchData, convertXMLToJSON, odm: redisODM }
        )().should.eventually
          .equalTo(multipleJsonData.feed.entry.map(en => positiveReply)))
    })
  })
})
