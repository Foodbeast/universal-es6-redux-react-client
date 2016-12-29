'use strict'

import { connect } from 'react-redux'
import PostListPage from './PostListPage'

const mapStateToProps = ({ posts }) => ({ posts })
export default connect(mapStateToProps)(PostListPage)
